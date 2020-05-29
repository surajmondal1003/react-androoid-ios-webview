import React, { Component } from 'react'
import { Icon, Drawer, IconButton, Tabs, Tab, Box, Typography, makeStyles, Button, FormControlLabel, Checkbox, Paper, InputBase } from '@material-ui/core';
import PropTypes from 'prop-types';


export default class StoreListCategory extends Component {
  constructor(props) {
    super(props);
    // this.classes = useStyles()
    this.state = {
      drawer: false,
      value: 0
    }
    this.currentQuery = {}
    window.filterCategoryClass = this;
  }

  fetchDataFromCategory = (catId, type) => {
    const query = this.currentQuery;
    if (type === 'all')
      query.businessCategoryId = null;
    else
      query.businessCategoryId = catId;
    query.categories = [];
    query.from = 0;
    query.size = 10;
    this.props.fetchDataFromCategory({ query, via: 'category_filter', type: 'filter' });
  }
  fetchDataFromSubCategory = (catList, type) => {
    const query = this.currentQuery;
    query.categories = catList;
    query.from = 0;
    query.size = 10;
    query.businessCategoryId = null;
    this.props.fetchDataFromCategory({ query, via: 'category_filter', type: 'filter' });
    this.toggleFilter();
  }
  toggleFilter = () => {
    this.setState((prevState) => ({ drawer: !prevState.drawer }));
    console.log(!this.state.drawer)
    if (window.TestAndroid) {
      window.TestAndroid.onFilterOpen(!this.state.drawer)
    }
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.onFilterOpen) {
      window.webkit.messageHandlers.onFilterOpen.postMessage(!this.state.drawer);
    }
  }
  closeFilteronScrollUp = () => {
    this.setState({ drawer: false });
    console.log(this.state.drawer)
    if (window.TestAndroid) {
      window.TestAndroid.onFilterOpen(this.state.drawer)
    }
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.onFilterOpen) {
      window.webkit.messageHandlers.onFilterOpen.postMessage(this.state.drawer);
    }
  }

  render() {
    console.log(this.state.drawer)

    let chosenCategories = [];
    let chosenBusinessCategoryId = null;
    let chosenFilter = false;
    if (this.props.currentQuery) {
      this.currentQuery = this.props.currentQuery.toJS();
      chosenCategories = this.currentQuery.categories;
      chosenBusinessCategoryId = this.currentQuery.businessCategoryId;
      if (!chosenBusinessCategoryId && chosenCategories.length > 0)
        chosenFilter = true;
    }
    const categoryList = this.props.categoryList ? this.props.categoryList : [];
    let chosenParentCategoryIndex = 0;
    return (
      <>
        <div className="category-filter store-category-filter">
          {
            categoryList.length > 0 &&
            <ul>
              {/* <li onClick={() => this.toggleFilter()}><Icon>tune</Icon> Filter</li>
              <li className={!chosenBusinessCategoryId ? 'active' : ''} onClick={() => this.fetchDataFromCategory('', 'all')}>All</li> */}
              <li className={chosenFilter ? 'active' : ''} onClick={() => this.toggleFilter()}><Icon>tune</Icon> Filter</li>
              <li className={chosenFilter || chosenBusinessCategoryId ? '' : 'active'} onClick={() => this.fetchDataFromCategory('', 'all')}>All</li>

              {
                categoryList.map((cat, index) => {
                  let isActive = false;
                  if (chosenBusinessCategoryId == cat.id) {
                    chosenParentCategoryIndex = index;
                    isActive = true;
                  }

                  return (<li className={isActive ? "active" : ''} key={cat.id} onClick={() => this.fetchDataFromCategory(cat.id, 'cat_list')}>
                    {cat.name}
                  </li>)
                })
              }
            </ul>
          }
        </div>
        <Drawer anchor={'bottom'} open={this.state.drawer} onClose={() => this.toggleFilter()}>
          <>
            <div className="choose-delivery-address d-flex justfy-space-btw align-center">
              <p>Filter</p>
              <IconButton size="small" onClick={(event) => this.toggleFilter(event)}>
                <Icon fontSize="inherit">close</Icon>
              </IconButton>
            </div>
            <SubCategoryView categoryList={categoryList} chosenCategories={chosenCategories} chosenParentCategoryIndex={chosenParentCategoryIndex} fetchDataFromCategory={this.fetchDataFromSubCategory} />
          </>
        </Drawer>
      </>
    )
  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    key: `tab_${index}`
  };
}
class SubCategoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.chosenParentCategoryIndex,
      options: this.props.categoryList[this.props.chosenParentCategoryIndex].store_category,
      prevOptions: this.props.categoryList[this.props.chosenParentCategoryIndex].store_category,
      chosenSubCategories: this.props.chosenCategories
    }
  }
  setValue = (newVal) => {
    this.setState({ value: newVal });
  }
  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
      options: this.props.categoryList[newValue].store_category,
      prevOptions: this.props.categoryList[newValue].store_category
    })
    // this.setValue(newValue);
  };
  categorySearch = (e) => {
    const value = e.target.value;
    let optionsArr = this.state.prevOptions;
    if (value.length > 0)
      optionsArr = this.state.prevOptions.filter(x => x.name.toLowerCase().includes(value.toLowerCase()));
    this.setState({ options: optionsArr });
  }
  onSubCatSelection = (childCat, selected, foundIndex) => {
    if (selected)
      this.state.chosenSubCategories.splice(foundIndex, 1);
    else {
      let obj = {
        "query_string": {
          "query": `${childCat.name}*`,
          "default_field": "store_category.name",
          "fields": [],
          "type": "best_fields",
          "default_operator": "or",
          "max_determinized_states": 10000,
          "enable_position_increments": true,
          "fuzziness": "AUTO",
          "fuzzy_prefix_length": 0,
          "fuzzy_max_expansions": 50,
          "phrase_slop": 0,
          "escape": false,
          "auto_generate_synonyms_phrase_query": true,
          "fuzzy_transpositions": true,
          "boost": 1.0
        }
      }
      this.state.chosenSubCategories.push(obj);
    }
  }
  applyClick = () => {
    console.log(this.state.chosenSubCategories);
    this.props.fetchDataFromCategory(this.state.chosenSubCategories);
  }
  onClearAllClick = () => {
    this.searchInput.value = '';
    console.log(this.state.chosenSubCategories);
    this.setState({
      options: this.props.categoryList[this.state.value].store_category,
      chosenSubCategories: []
    })
  }
  render() {
    return (
      <>
        <div className="store-filter">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="Vertical tabs example"
          >
            {
              this.props.categoryList.map((cat, index) => {
                return (
                  <Tab label={cat.name} {...a11yProps(index)} />
                )
              })
            }
          </Tabs>
          {
            this.props.categoryList.map((cat, index) => {
              return (<TabPanel value={this.state.value} index={index}>
                <div className="filter-sub-category">
                  <div className="search-sub-category">
                    <Paper component="form">
                      <IconButton>
                        <Icon>search</Icon>
                      </IconButton>
                      <InputBase
                        inputRef={ref => this.searchInput = ref}
                        placeholder="Search Category"
                        onKeyUp={(e) => this.categorySearch(e)}
                      />
                    </Paper>
                  </div>
                  {
                    this.state.options.map((childCat, index) => {
                      // wildcard.store_category.wildcard.substr(1).slice(0, -1).
                      const foundIndex = this.state.chosenSubCategories.findIndex(x => x.query_string.query.slice(0, -1).toLowerCase() == childCat.name.toLowerCase());
                      const selected = foundIndex >= 0 ? true : false;
                      console.log('selected', selected)
                      return (
                        <FormControlLabel
                          key={`subCat_${index}`}
                          control={
                            <Checkbox
                              key={`cat_${index}_${Math.random()}`}
                              defaultChecked={selected}
                              name={childCat.name}
                              color="primary"
                              onChange={() => this.onSubCatSelection(childCat, selected, foundIndex)}
                            />
                          }
                          label={childCat.name}
                        />
                      )
                    })
                  }
                </div>
              </TabPanel>)
            })
          }

        </div>
        <div className="filter-apply d-flex align-center justfy-space-btw">
          <Button onClick={() => this.onClearAllClick()}>Clear All</Button>
          <Button color="primary" variant="contained" disableElevation onClick={() => this.applyClick()}>Apply</Button>
        </div>
      </>
    )
  }
}