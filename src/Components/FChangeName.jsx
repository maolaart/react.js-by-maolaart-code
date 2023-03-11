const FChangeName = ({change}) => {
    return(
        <div className="Wrap-Name">
            <div className="Fo">
                <label>Name</label>
                <p className="Change-Name">
                    {!change ? "Andre" : "Maolaart"} 
                </p>
            </div>
        </div>
    )
};

export default FChangeName;