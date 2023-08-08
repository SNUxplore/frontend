import React, { useEffect, useMemo } from "react";
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

  const testData = useMemo(() => {
    // fuse cannot search in multiple arrays
    // So all locations are merged into one array
    // The key is put in the category key of each element

    let t = [];
    Object.keys(data).forEach((key) => {
      const temp = data[key].map((obj) => {
        let additionalSearch = "";
        if (obj.name.includes("Dining")) {
          additionalSearch = "dh" + obj.name.split("Dining Hall")[1];
        }
        if (obj.name.includes("Hostel")) {
          additionalSearch = obj.name.replaceAll("-", "");
        }

        return {
          ...obj,
          category: key,
          href: `/navigate/${key}/?name=${obj.name}`,
          optionalSearchKey: additionalSearch,
        };
      });
      t = t.concat(temp);
    });

    admin["Academics"].map((obj) => {
      obj.Departments.forEach((dept) => {
        t = t.concat({
          ...obj,
          category: dept.Department,
          href: `/admin/Academics`,
          name: dept.Hod,
        });
      });
    });

    Object.keys(admin).forEach((key) => {
      const temp = admin[key].map((obj) => {
        let name1 = "";
        let name2 = "";
        let name3 = "";

        if (key.includes("Academics")) {
          name1 = "Block " + obj.Block;
          name2 = "School " + obj.School;
          name3 = "Dean " + obj.Dean;
        } else if (key.includes("Admin Info")) {
          name1 = obj.Function;
          name2 = obj.SPOC;
          name3 = obj.Office;
        }
        return (
          {
            ...obj,
            category: key,
            href: `/admin/${key}`,
            name: name1,
          },
          {
            ...obj,
            category: key,
            href: `/admin/${key}`,
            name: name2,
          },
          {
            ...obj,
            category: key,
            href: `/admin/${key}`,
            name: name3,
          }
        );
      });
      t = t.concat(temp);
    });

    return t;
  }, []);
  // console.log(testData);
  const fuseOptions = {
    shouldSort: true,
    keys: ["name", "optionalSearchKey"],
  };
  const fuse = new Fuse(testData, fuseOptions);

  useEffect(() => {
    setResults(fuse.search(search, { limit: 5 }));
  }, [search]);

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
            placeholder={"Search for location, admin info or anything"}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            // onFocus={() => { setIsFocused(true); }}
            onClick={(e) => {
              e.stopPropagation();
              setIsFocused(true);
            }}
          />
          {/* <button
            type="button"
            className={activeClassName("SearchBarWrapper__submit", isFocused)}
          >
            <img src={SearchIcon} alt="Search Icon" />
          </button> */}
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
                  href={result.item.href}
                  key={result.refIndex}
                >
                  <div className="SearchBarWrapper__resultCategory">
                    {result.item.category}
                  </div>
                  <div className="SearchBarWrapper__resultName">
                    {result.item.name}
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
