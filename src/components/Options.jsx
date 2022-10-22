import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MyModal from "./UI/MyModal/MyModal";

const options = [
    'Исполнитель',
    'Время'
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [modal, setModal] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const changeProps = () => {
        return (
        <MyModal visible={modal} setVisible={setModal}>
            <input type="text" placeholder="Ввдеите новый номер автобуса"></input>
        </MyModal>
        );
    };


    return (
        <div>
            <IconButton className="optionsButton"
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}>
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Исполнитель'} onClick={changeProps}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
