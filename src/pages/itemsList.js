import { useState } from "react";
import { useEffect } from "react";

import classes from "./itemsList.module.css";
import Item from "../elements/item";

function List() {
  /* let data = [
    {
      picture: "firstPic",
      name: "firstName",
      description: "descOfFirstItem",
      price: "priceOfFirstItem",
      page: "linkToFirstPage",
    },
    {
      picture: "secondPic",
      name: "secondName",
      description: "descOfSecondItem",
      price: "priceOfSecondItem",
      page: "linkToSecondPage",
    },
    {
      picture: "thirdPic",
      name: "thirdName",
      description: "descOfThirdItem",
      price: "priceOfThirdItem",
      page: "linkToThirdPage",
    },
    {
      picture: "fourthPic",
      name: "fourthName",
      description: "descOfFourthItem",
      price: "priceOfFourthItem",
      page: "linkToFourthPage",
    },
    {
      picture: "fifthPic",
      name: "fifthName",
      description: "descOfFifthItem",
      price: "priceOfFifthItem",
      page: "linkToFifthPage",
    },
  ]; */

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-17cff-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  console.log(loadedMeetups);

  let items = [];

  for (let i = 0; i < loadedMeetups.length; i++) {
    items.push(
      <Item
        picture={loadedMeetups[i].picture}
        name={loadedMeetups[i].name}
        description={loadedMeetups[i].description}
        price={loadedMeetups[i].price}
        page={loadedMeetups[i].page}
      />
    );
  }

  return (
    <div className={classes.content}>
      it is itemsList
      <div className={classes.items}>
        {/* <Item
          picture="https://img01.ztat.net/article/spp-media-p1/5d962752edea4049168e91553a586d7/d7073c09d4cb4945bea1571763513cb0.jpg?imwidth=1800"
          name="shoes"
          description="nice shoes"
          price="29.99$"
          page="linkToItem"
        /> */}
        {items}
      </div>
    </div>
  );
}

export default List;
