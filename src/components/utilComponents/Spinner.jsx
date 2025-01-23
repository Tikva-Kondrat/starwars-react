const Spinner = () => {
    return (
        <div className="d-inline">
            <div className="spinner-grow text-info align-content-center"
                 role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;