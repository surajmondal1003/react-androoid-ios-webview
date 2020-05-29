import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


// Component lazy-load

const Home = lazy(() => import('../../views/home'));
const Root = lazy(() => import('../../views/home/root'));
const StoreSearchList = lazy(() => import('../../views/store-search-list'));
const MyProfile = lazy(() => import('../../views/myprofile'));
const Chat = lazy(() => import('../../containers/chat_test'));
const ChatPage = lazy(() => import('../../containers/chat_test/ChatPage'));
const Faq = lazy(() => import('../../views/faq'));
const ReferStoreForm = lazy(() => import('../../components/refer-store-form'));
const FaqCategory = lazy(() => import('../../views/faq-category'));
const Marketplace = lazy(() => import('../../views/marketplace'));
const BrandExclusive = lazy(() => import('../../views/brand-exclusive'));
const TermsConditions = lazy(() => import('../../views/terms-conditions'));
const PrivacyPolicy = lazy(() => import('../../views/privacy-policy'));
const BusinessPolicy = lazy(() => import('../../views/business-policy'));
const NextDoorhub = lazy(() => import('../../views/nextdoorhub'));

// a fallback component while component takes time to load.
function SuspenseComponent({ component: Component, ...rest }) {
  return (
    <Suspense fallback={
      <div style={{ backgroundColor: '#FFF', padding: '20px' }}>
        <div className="shine box"></div>

        <div className="div">
          <div className="shine lines"></div>
          <div className="shine lines"></div>
          <div className="shine lines"></div>
        </div>

        <div className="shine photo" ></div>
        <div className="shine photo"></div>

        <br />

        <div className="shine box"></div>

        <div className="div">
          <div className="shine lines"></div>
          <div className="shine lines"></div>
          <div className="shine lines"></div>
        </div>
      </div>
    }>
      <Component {...rest} />
    </Suspense>
  )
}
function PrivateRoute({ component: Component, ...rest }) {
  const authToken = localStorage.getItem('apa-2-token') || null
  return (
    <Route
      {...rest}
      render={props =>
        authToken !== null ? (
          <SuspenseComponent component={Component} {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}
function NonPrivateRoute({ component: Component, ...rest }) {
  const authToken = localStorage.getItem('apa-2-token') || null
  return (
    <Route
      {...rest}
      render={props =>
        authToken === null ? (
          <SuspenseComponent component={Component} {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}
const IndexRouter = (props) => (
  <Switch>
    <Route exact path='/' render={(props) => (<SuspenseComponent component={Root} {...props} />)} />
    <Route exact path='/home' render={(props) => (<SuspenseComponent component={Home} {...props} />)} />
    <Route path='/store-list' render={(props) => (<SuspenseComponent component={StoreSearchList} {...props} />)} />
    <Route path='/myprofile' render={(props) => (<SuspenseComponent component={MyProfile} {...props} />)} />
    <Route path='/chat' render={(props) => (<SuspenseComponent component={Chat} {...props} />)}/>
    <Route path='/chat-with-user' render={(props) => (<SuspenseComponent component={ChatPage} {...props} />)}/>
    <Route path='/faq' render={(props) => (<SuspenseComponent component={FaqCategory} {...props} />)} />
    <Route path='/refer-store' render={(props) => (<SuspenseComponent component={ReferStoreForm} {...props} />)} />
    <Route path='/brand-exclusive' render={(props) => (<SuspenseComponent component={NextDoorhub} {...props} />)} />
        <Route path='/marketplace' render={(props) => (<SuspenseComponent component={Marketplace} {...props} />)} />
        <Route path='/terms-conditions' render={(props) => (<SuspenseComponent component={TermsConditions} {...props} />)} />
        <Route path='/privacy-policy' render={(props) => (<SuspenseComponent component={PrivacyPolicy} {...props} />)} />
        <Route path='/business-policy' render={(props) => (<SuspenseComponent component={BusinessPolicy} {...props} />)} />
        {/* <Route path='/nextdoorhub' render={(props) => (<SuspenseComponent component={NextDoorhub} {...props} />)} /> */}

    
    {/* <PrivateRoute exact path='/' component={Login} /> */}

    {/* <Route exact path='/' render={(props) => (<SuspenseComponent component={Home} {...props} />)} />
    <Route path="/payment/response" render={(props) => (<SuspenseComponent component={CheckoutResponse} {...props} />)} />
    <Route path="/myorders/success" render={(props) => (<SuspenseComponent component={OrderSucess} {...props} />)} />
    <Route path="/myorders" render={(props) => (<SuspenseComponent component={OrderView} {...props} />)} />
    <Route path="/customers" render={(props) => (<SuspenseComponent component={CustomersView} {...props} />)} />
    <Route path="/saved-cart" render={(props) => (<SuspenseComponent component={SavedCartView} {...props} />)} />
    <Route path="/store-pickup" render={(props) => (<SuspenseComponent component={StorePickupView} {...props} />)} />
    <Route path="/settings" render={(props) => (<SuspenseComponent component={SettingsView} {...props} />)} /> */}
  </Switch>
)


export default IndexRouter;