import React, { useCallback, useEffect, useMemo } from "react";
import SearchIcon from "app/Assets/Img/SearchIcon.svg";
import Fuse from "fuse.js";
import data from "~/Assets/Data/data.json";
import admin from "~/Assets/Data/admin.json";

function activeClassName(className, isActive) {
  return `${className} ${isActive ? className + "--active" : ""}`;
}

function SearchBar({ style }) {
  const [search, setSearch] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const [results, setResults] = React.useState([]);

  function getSearchString(obj) {
    const properties = [
      "name",
      "description",
      "School",
      "Dean",
      "Department",
      "Hod",
      "SPOC",
      "Function",
    ];

    let s = "";
    properties.forEach((property) => {
      if (obj[property]) {
        s += obj[property].replace(/[^a-zA-Z0-9]/gi, "");
      }
    });

    return s;
  }

  const searchData = useMemo(() => {
    // fuse cannot search in multiple arrays
    // So all locations are merged into one array

    let t = [];

    Object.keys(data).forEach((key) => {
      data[key].forEach((v, k) => {
        t.push({
          ...v,
          searchString: getSearchString(v),
          subheading: key,
          heading: v.name,
        });
      });
    });

    admin["Academics"].forEach((obj) => {
      t.push({
        ...obj,
        searchString: getSearchString(obj),
        subheading: obj["School"],
        heading: obj["Dean"],
      });
      obj["Departments"].forEach((department) => {
        t.push({
          ...department,
          searchString: getSearchString(department),
          subheading: obj["Department"],
          heading: obj["Hod"],
        });
      });
    });
    admin["Admin Info"].forEach((entry) => {
      const obj = entry[Object.keys(entry)[0]];
      obj.forEach((value) => {
        t.push({
          ...value,
          searchString: getSearchString(value),
          subheading: value["Function"],
          heading: value["SPOC"],
        });
      });
    });

    return t;
  }, []);

  const fuseOptions = useMemo(() => {
    return {
      shouldSort: true,
      keys: ["name", "searchString"],
      ignoreLocation: true,
    };
  }, []);
  const fuse = useMemo(
    () => new Fuse(searchData, fuseOptions),
    [searchData, fuseOptions]
  );

  useEffect(() => {
    // console.log(fuse.search(search));
    setResults(fuse.search(search, { limit: 5 }));
  }, [search, fuse]);

  useEffect(() => {
    // toggle body scroll
    if (isFocused) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFocused]);

  return (
    <div
      className={activeClassName("SearchBarWrapper", isFocused)}
      onClick={() => {
        setIsFocused(false);
      }}
      style={style}
    >
      <div className={activeClassName("SearchBarWrapper__modal", isFocused)}>
        <div
          className={activeClassName("SearchBarWrapper__searchBox", isFocused)}
        >
          <input
            className="SearchBarWrapper__input"
            type="text"
            placeholder={"Search"}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (!isFocused) setIsFocused(true);
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsFocused(true);
            }}
          />
          <button
            type="button"
            className={activeClassName("SearchBarWrapper__submit", isFocused)}
          >
            <img src={SearchIcon} alt="Search Icon" />
          </button>
        </div>
        {results.length > 0 && (
          <div
            className={activeClassName(
              "SearchBarWrapper__searchResults",
              isFocused
            )}
          >
            {results.map((result) => {
              return (
                <a
                  className="SearchBarWrapper__searchResult"
                  href={
                    "/navigate/" +
                    result.item.subheading +
                    "?name=" +
                    result.item.heading
                  }
                  key={result.refIndex}
                >
                  <div className="SearchBarWrapper__resultCategory">
                    {result.item.subheading}
                  </div>
                  <div className="SearchBarWrapper__resultName">
                    {result.item.heading}
                  </div>
                </a>
              );
              // return <pre>{JSON.stringify(result, null, 2)}</pre>
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
