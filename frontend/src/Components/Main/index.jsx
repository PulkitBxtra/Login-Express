import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const [imageData, setImageData] = useState(null);

	useEffect(() => {
	  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
		.then(response => response.json())
		.then(data => setImageData(data))
		.catch(error => console.error(error));
	}, []);
  
	if (!imageData) {
	  return <p>Loading...</p>;
	}
  
	const { url, title, explanation } = imageData;

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

			<div className="NasaImage"> {/* Add a class name */}
				<h2>{title}</h2>
				<img src={url} alt={title} />
			<p>{explanation}</p>
    </div>
		</div>
	);
};

export default Main;