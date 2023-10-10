const MyButton = (props) => {
    console.log(props);
    console.log(props.btnText);
    return (
    <div>
        <button>
            {props.btnText} {props.btnText2}
        </button>
    </div>
    );
};
export default MyButton;