import styled from '@emotion/styled';
import { RootState } from 'app/rootReducer';
import { useSelector } from 'react-redux';
import { locationsData } from '../../api/data';
import LinkCTA from '../../components/LinkCTA';

const StyledHome = styled('div')((props) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 0 0',
  paddingBottom: 60,
  color: props.theme.colors.white,
  main: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    '& > div': {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '10px 20px',
    },
  },
  '@media (min-width: 780px)': {
    main: {
      '& > div': {
        justifyContent: 'center',
        padding: '50px 20px',
      },
    },
  },
}));

const StyledSubheader = styled('div')((props) => ({
  width: '100%',
  padding: '10px 20px',
  textAlign: 'center',
  '@media (max-width: 780px)': {
    h1: {
      fontSize: 20,
    },
    h2: {
      fontSize: 14,
    },
  },
}));

const StyledLocations = styled('div')((props) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  '& > h3': {
    textAlign: 'center',
    width: '100%',
  },
  '& > div': {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  a: {
    height: 'auto',
    padding: '15px 30px',
  },
}));

export const Home = () => {
  const keywords = useSelector((state: RootState) => state.keywords);
  const categories = keywords.categories.map((item) => (
    <LinkCTA category={item.category} icon={item.icon} key={item.category} />
  ));
  const locations = locationsData.map((item) => (
    <LinkCTA category={item.category} key={item.category} />
  ));
  return (
    <StyledHome>
      <StyledSubheader>
        <h1>Street Photography Hashtags</h1>
        <h2>A curation of hashtags for street photography on Instagram.</h2>
      </StyledSubheader>
      <main>
        <div>
          <LinkCTA
            category={keywords.all.category}
            icon={keywords.all.icon}
            key={keywords.all.category}
          />
          {categories}
        </div>
        <StyledLocations>
          <h3>Locations</h3>
          <div>{locations}</div>
        </StyledLocations>
      </main>
    </StyledHome>
  );
};
