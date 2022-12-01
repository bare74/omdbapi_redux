import { useEffect, useState } from "react";
import { getMovies } from "./redux/actionCreators/getMovies";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypeSelector";
import CardInfo from "./components/cardInfo";
import Loader from "./components/loader";
import Modal from "react-bootstrap/Modal";
import CardDetail from "./components/cardDetail";
import Pagination from "./components/pagination";
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

  useEffect(() => {
    dispatch(getMovies(currentPage, movie));
  }, [currentPage, dispatch, movie]);

  return (
    <div>
      <NavBar onSubmitHandler={setMovie} />
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
