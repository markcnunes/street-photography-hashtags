import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import LayoutCategory from '../components/LayoutCategory';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Share from '../components/Share';
import GlobalStyles from '../assests/theme/GlobalStyles';
import { Contribution } from 'pages/Contribution';
import { RootState } from './rootReducer';
import { NotFoundPage } from 'pages/NotFound';
import CookieBanner from 'components/CookieBanner/CookieBanner';
import Privacy from 'pages/Privacy';
import Terms from 'pages/Terms';
import usePageTracking from 'hooks/usePageTracking';

const App: React.FC = () => {
  usePageTracking();

  const keywords = useSelector((state: RootState) => state.keywords);
  // Unifies all categories into one
  const allCategories = (
    <Route path={`/${keywords.all.category}`}>
      <LayoutCategory
        category={keywords.all.category}
        icon={keywords.all.icon}
        keywords={keywords.all.keywords}
      />
    </Route>
  );
  // Creates different paths for each category
  const categories = keywords.categories.map((item) => (
    <Route key={item.category} path={`/${item.category}`}>
      <LayoutCategory
        category={item.category}
        icon={item.icon}
        keywords={item.keywords}
      />
    </Route>
  ));
  // Creates different paths for each location
  const locations = keywords.locations.map((item) => (
    <Route key={item.category} path={`/${item.category}`}>
      <LayoutCategory category={item.category} keywords={item.keywords} />
    </Route>
  ));

  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path='/' exact={true}>
          <Home />
        </Route>
        <Route path='/contribution' exact={true}>
          <Contribution />
        </Route>
        <Route path='/about' exact={true}>
          <About />
        </Route>
        {allCategories}
        {categories}
        {locations}
        <Route path='/privacy' exact={true}>
          <Privacy />
        </Route>
        <Route path='/terms' exact={true}>
          <Terms />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
      <Share />
      <Footer />
      <CookieBanner />
      <ToastContainer />
    </>
  );
};

export default App;
