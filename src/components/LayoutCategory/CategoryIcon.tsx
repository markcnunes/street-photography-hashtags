import {
  GiBalloons,
  GiBallPyramid,
  GiBlackball,
  GiFilmStrip,
  GiModernCity,
  GiNewspaper,
  GiPalette,
  GiSuspicious,
  GiSpy,
  GiTrophy,
} from 'react-icons/gi';
import { TCategoryIcon } from '../../api/data';

/**
 * Re-export icons and load them dynamically as a variant instead of the component name
 * It is only useful dynamic purposes other icons should be imported straight from react-icons/gi
 */

interface ICategoryIcon {
  /**
   * Takes one of icons from 'TCategoryIcon' corresponds to Icons variations
   */
  variant: TCategoryIcon;
}

const listIcons = {
  GiBalloons,
  GiBallPyramid,
  GiBlackball,
  GiFilmStrip,
  GiModernCity,
  GiNewspaper,
  GiPalette,
  GiSuspicious,
  GiSpy,
  GiTrophy,
};

const CategoryIcon: React.FC<ICategoryIcon> = ({ variant }) => {
  let Component: any = null;

  Object.entries(listIcons).forEach(([key, entry]) => {
    if (key === variant) {
      Component = entry;
    }
  });
  return <Component data-testid={variant} />;
};

export default CategoryIcon;
