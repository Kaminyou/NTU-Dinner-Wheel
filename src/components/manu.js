import { Button, createTheme, Menu, MenuItem, ThemeProvider } from '@material-ui/core';
import { useState } from "react";


export default function BasicMenu({ restaurantListList, setListName, currentListName }) {
    

    const theme = createTheme({
        palette: {
            primary: {
                main: '#49513C',
            },
        },
    });
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (set, e) => {
        setAnchorEl(null);
        setListName(set);
    };

    return (
        <ThemeProvider theme={theme}>
            <Button
                id="basic-button"
                color="primary"
                variant="contained"
                onClick={handleClick}
                style={{textTransform: 'none'}}
            >
            {currentListName}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {restaurantListList.map(function (set) {
                    return <MenuItem onClick={(e) => handleClose(set, e)}>{set}</MenuItem>;
                })}
            </Menu>
        </ThemeProvider>
    );
}