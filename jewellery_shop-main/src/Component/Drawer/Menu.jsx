import React from 'react'
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RuleIcon from '@mui/icons-material/Rule';
import CategoryIcon from '@mui/icons-material/Category';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuItem from './MenuItem';
export default function Menu({setCheck}) {
    return (
        <List>
            <MenuItem to={'/'} icon={<CategoryIcon/>} onClick = {() => setCheck(1)}  text={"Product"} />
            <MenuItem to={'/finished'} onClick = {() => setCheck(2)}   icon={<CheckCircleOutlineIcon/>} text={"Finished Product"} />
            <MenuItem to={'/unfinished'} icon={<RuleIcon/>} onClick = {() => setCheck(3)}  text={"Unfinished Product"} />
            <MenuItem to={'/addProduct'} icon={<AddBoxIcon/>} text={"Add Product"} />
        </List>

    )
}
