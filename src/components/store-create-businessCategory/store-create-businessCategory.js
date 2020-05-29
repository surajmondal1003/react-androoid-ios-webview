import React, { Component } from 'react'
import { Paper, Icon, List, ListItem, InputBase, ListItemIcon, Divider, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

export default class StoreCreateBusinessCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessId: this.props.businessCategoryId.id,
      list: [],
      prevList: [],
      onSearch: false
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (!props.businessCategoryList.length)
      props.getBusinessCategoryList()
    else if (!state.onSearch)
      return { list: props.businessCategoryList, prevList: props.businessCategoryList }
    return null;
  }
  businessIdChange = (x) => {
    this.props.onChange(x);
    this.setState({ businessId: x.id });
  }
  onSearch = (e) => {
    const value = e.target.value;
    const filterArr = this.state.prevList.filter(x => x.businessCategoryName.toLowerCase().includes(value.toLowerCase()));
    this.setState({ list: filterArr, onSearch: true });
  }
  render() {

    return (
      <>
        <div className="search-sub-category">
          <Paper component="form">
            <IconButton>
              <Icon>search</Icon>
            </IconButton>
            <InputBase
              placeholder="Search Business Category"
              onKeyUp={(e) => this.onSearch(e)}
            />
          </Paper>
        </div>
        <List component="nav" aria-label="main mailbox folders">
          {
            this.state.list.map(x => {
              return (
                <>
                  <ListItem key={x.id} button onClick={() => this.businessIdChange(x)}>
                    <ListItemIcon>
                      <Icon>next_week</Icon>
                    </ListItemIcon>
                    <ListItemText primary={x.businessCategoryName} />
                    {
                      this.state.businessId == x.id &&
                      <ListItemSecondaryAction>
                        <Icon edge="end">
                          check
                    </Icon>
                      </ListItemSecondaryAction>
                    }
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              )
            })
          }
        </List>
      </>
    )
  }
}
