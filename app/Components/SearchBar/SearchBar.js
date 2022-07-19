import React, { useEffect, useMemo } from "react";
import SearchIcon from "app/Assets/Img/SearchIcon.svg";
import Fuse from "fuse.js";
import data from "~/Assets/Data/data.json";

function activeClassName(className, isActive) {
	return `${className} ${isActive ? className + "--active" : ""}`;
}

function SearchBar() {
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
				return {
					...obj,
					category: key,
				};
			});
			t = t.concat(temp);
		});
		return t;	
	}, []);
	
	const fuseOptions = {
		shouldSort: true,
		keys: ["name"],
	};
	const fuse = new Fuse(testData, fuseOptions);
	
	useEffect(() => {
		setResults(fuse.search(search));
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
			onClick={() => { setIsFocused(false) }}>
			<div
				className={activeClassName("SearchBarWrapper__modal", isFocused)}>
				<div className="SearchBarWrapper__searchContainer">
					<div
						className={activeClassName("SearchBarWrapper__searchBox", isFocused)}>
						<input
							className="SearchBarWrapper__input"
							type="text"
							placeholder={"Search"}
							value={search}
							onChange={(e) => { setSearch(e.target.value) }}
							// onFocus={() => { setIsFocused(true); }}
							onClick={(e) => {
								e.stopPropagation();
								setIsFocused(true);
							}}
						/>
						<button type="button" className="SearchBarWrapper__submit">
							<img src={SearchIcon} alt="Search Icon" />
						</button>
					</div>
					<button
						type="button"
						className={activeClassName("SearchBarWrapper__cancel", isFocused)}
						onClick={() => setIsFocused(false)}>
						Cancel
					</button>
				</div>
				<div className={activeClassName("SearchBarWrapper__searchResults", isFocused)}>
					{search === ""
						? <div className="SearchBarWrapper__noSearchResult">
							<p>No search results</p>
						</div>
						: results.map((result) => {
								return (
									<a
										className="SearchBarWrapper__searchResult"
										href={"/navigate/" + result.item.category + "?name=" + result.item.name}
										key={result.refIndex}>
										<p>
											{result.item.name}
										</p>
									</a>
								);
							})
						}
				</div>
			</div>
		</div>
  );
}

export default SearchBar;
