import Header from "../components/Header/Header"

const font = "'Open Sans', sans-serif"

const HeaderStyle = {
    root: {
        flexGrow: 1,
    },
    appBar: {
        display: "flex",
        border: "0",
        borderRadius: "3px",
        padding: "0.625rem 0",
        color: "#555",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow:
            "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
        transition: "all 150ms ease 0s",
        justifyContent: "flex-start",
        position: "relative",
    },
    container: {
        minHeight: "50px",
        flex: "1",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexWrap: "nowrap"
    },
    title: {
        marginLeft: "8%",
        lineHeight: "30px",
        fontSize: "18px",
        borderRadius: "3px",
        textTransform: "none",
        color: "inherit",
        padding: "8px 16px",
        letterSpacing: "unset",
        "&:hover,&:focus": {
            color: "inherit",
            background: "transparent"
        }
    },
    titleLink: {
        fontfamily: font,
        textDecoration: "none",
        fontSize: "1.7rem",
        color: "black",
        '&a:': {
            textDecoration: "none",
        },
        '&:visited': {
            textDecoration: "none",
        }
    },
    navLink: {
        fontfamily: font,
        textDecoration: "none",
        fontSize: "1rem",
        color: "black"
    }
}

export default HeaderStyle;
