import { useEffect, useState } from "react";
import { getMovie } from "./redux/actionCreators/getMovies";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypeSelector";
import CardInfo from "./components/cardInfo";
import Loader from "./components/loader";
import Modal from "react-bootstrap/Modal";
import CardDetail from "./components/cardDetail";
import Pagination from "./components/pagination";
// import SortButton from "./components/sortButton";

import NavBar from "./components/navBar";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const [movie, setMovie] = useState("cars");
  const [activateModal, setActivateModal] = useState(false);
  const [detail, setShowDetail] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { comments, loading } = useTypedSelector((state) => state.comments);

  console.log(comments);
  console.log(loading);

  useEffect(() => {
    dispatch(getMovie(currentPage, movie));
  }, [currentPage, dispatch, movie]);

  // const SortYear = () => {
  //   comments.sort((a: any, b: any) => {
  //     if (a.Year < b.Year) return 1;
  //     if (a.Year > b.Year) return -1;
  //     return 0;
  //   });
  //   console.log(comments.sort());
  // };

  return (
    <div>
      <NavBar onSubmitHandler={setMovie} />
      {/* <div className="App_button">
        <SortButton
          text="Years"
          style={{ margin: "10px" }}
          onClick={SortYear}
        ></SortButton>
        <SortButton
          text="Series"
          style={{ margin: "10px" }}
          onClick={detail}
        ></SortButton>

        <SortButton text="Movie" onClick={detail}></SortButton>
      </div> */}
      {loading ? (
        <Loader />
      ) : (
        <div className="card-box">
          {comments.map((result: any, index: any) => {
            return (
              <CardInfo
                key={index}
                Title={undefined}
                imdbID={undefined}
                Poster={undefined}
                Year={undefined}
                Type={undefined}
                ShowDetail={setShowDetail}
                DetailRequest={setDetailRequest}
                ActivateModal={setActivateModal}
                {...(result as unknown as Record<string, unknown>)}
              />
            );
          })}
        </div>
      )}
      <Modal
        className="modal-md"
        show={activateModal}
        onClick={() => setActivateModal(false)}
      >
        {detailRequest === false ? (
          <CardDetail
            Poster={undefined}
            Actors={undefined}
            imdbRating={undefined}
            Rated={undefined}
            Runtime={undefined}
            Genre={undefined}
            Plot={undefined}
            Title={undefined}
            {...(detail as unknown as Record<string, unknown>)}
          />
        ) : (
          <Loader />
        )}
      </Modal>
      <div className="pagination_container">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}

export default App;
