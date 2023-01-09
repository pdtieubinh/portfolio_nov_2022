import './Footer.css'
import Grid from '@mui/material/Grid';
import { profile } from '../../script/scripts';
import { Fragment, useState } from "react"
import Popper from '@mui/material/Popper';

export default function FooterPanel() {
    return (
        <Grid container spacing={1} className='FooterPanel'>
            <Grid item xs={0} md={4}></Grid>

            <Grid item xs={12} md={4}>
                <Contacts scripts={ profile }/>
            </Grid>

            <Grid item xs={0} md={4}></Grid>
        </Grid>
    )
}

function Contacts({ scripts }) {
    return (
        <Grid container spacing={1}>
            {scripts.map(
                script => (<Grid className='Contact' item xs={3} key={script.id}>
                    <ContactContent script={ script }/>
                </Grid>)
            )}
        </Grid>
    )
}

function ContactContent({ script }) {

    const [anchorEl, setAnchorEl] = useState(null);

    // This is used for Popper
    const hover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const unhover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    // Check if copied
    const [copied, setCopied] = useState(false)

    // This is used for copying to clipboard and opening new tab
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const click = () => {
        const newTabs = ['linkedin', 'github']
        if (newTabs.includes(script.id.toLowerCase()))
        {
            openInNewTab(script.info)
        } else {
            navigator.clipboard.writeText(script.info)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <div className='ContactContent' onMouseLeave={unhover}>
            <img alt={`${script.id} logo`} src={script.link} onMouseEnter={hover} onClick={click}/>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <ContactText script={script} copied={copied}/>
            </Popper>
        </div>
    )
}

function ContactText({ script, copied }) {
    const newTabs = ['linkedin', 'github']
    const action = (newTabs.includes(script.id.toLowerCase())) ? 'open' : 'copy'
    return (
        <div className='ContactText'>
            { copied ? <p>Copied</p> : <p>Click to {action}: <b>{script.info}</b></p> }
        </div>
    )
}