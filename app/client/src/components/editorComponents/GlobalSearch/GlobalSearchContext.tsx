import React from "react";
import { SearchItem } from "./utils";

type SearchContextType = {
  handleItemLinkClick: (item: SearchItem) => void;
  setActiveItemIndex: (index: number) => void;
  activeItemIndex: number;
};

const SearchContext = React.createContext<SearchContextType | undefined>(
  undefined,
);

export default SearchContext;
