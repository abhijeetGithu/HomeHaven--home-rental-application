import { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setTripList } from "../redux/state";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer";

const TripList = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user?._id); // Optional chaining
  const tripList = useSelector((state) => state.user?.tripList || []); // Default to empty array

  const dispatch = useDispatch();

  const getTripList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${userId}/trips`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      console.log("Fetched trip list:", data); // Log for debugging
      dispatch(setTripList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Trip List failed!", err.message);
    }
  };

  useEffect(() => {
    if (userId) {
      getTripList();
    } else {
      console.log("User ID is null or undefined");
    }
  }, [userId]); // Only fetch when userId is available

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Trip List</h1>
      <div className="list">
        {tripList?.map(
          ({ listingId, hostId, startDate, endDate, totalPrice, booking = true }) => {
            if (!listingId || !hostId) return null; // Skip invalid entries

            return (
              <ListingCard
                key={listingId._id || Math.random()} // Use a fallback key
                listingId={listingId?._id}
                creator={hostId?._id}
                listingPhotoPaths={listingId?.listingPhotoPaths}
                city={listingId?.city}
                province={listingId?.province}
                country={listingId?.country}
                category={listingId?.category}
                startDate={startDate}
                endDate={endDate}
                totalPrice={totalPrice}
                booking={booking}
              />
            );
          }
        )}
      </div>
      <Footer />
    </>
  );
};

export default TripList;
