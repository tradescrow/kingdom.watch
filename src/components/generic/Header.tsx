import React, {useEffect, useState} from "react";
import { Box, Grid, Typography, TextField, Button, ButtonGroup } from '@mui/material'
import { NavLink } from "react-router-dom";
import DFKLogo from '../../assets/dfk/logo.png'
import {useSnackbar} from "notistack";

const NavLinkStyle = {
  textDecoration: "none",
  color: "#9e9e9e",
}

const NavButtonStyle = {
  textTransform: "none"
}
const Header = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [btnDisabled, setBtnDisabled] = useState<boolean>(false)
  const [ethereum, setEthereum] = useState(null)
  const [account, setAccount] = useState<string|null>(null)

  const checkConnected = async () => {
    if (!ethereum) return
    setBtnDisabled(true)
    try {
      // @ts-ignore
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length === 0) {
        setAccount(null)
        setBtnDisabled(false)
        return
      }
      setAccount(accounts[0]);
    } catch (e: any) {
      setBtnDisabled(false)
      enqueueSnackbar(e.message, {variant: "error"})
    }
  }
  const connect = async () => {
    if (!ethereum) return
    await checkConnected()
    if (account) return
    setBtnDisabled(true)
    try {
      // @ts-ignore
      await ethereum.request({ method: "eth_requestAccounts" });
      await checkConnected()
    } catch (e: any) {
      setBtnDisabled(false)
      enqueueSnackbar(e.message, {variant: "error"})
    }
  }

  useEffect(() => {
    if (ethereum) return
    // @ts-ignore
    if (!window.ethereum) return
    // @ts-ignore
    setEthereum(window.ethereum)
  })

  return (
    <Box sx={{ marginBottom: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Grid item><Typography variant="h4">Welcome to the</Typography></Grid>
            <Grid item><Typography variant="h4"><img src={DFKLogo} alt="logo" /></Typography></Grid>
            <Grid item><Typography variant="h4">Watch</Typography></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: 1 }}>
        <Typography variant="h6">
          Kingdoms gather, and now my watch begins.
        </Typography>
        <Typography variant="caption">
          - Someone on the Internet
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: 1 }}>
        <Typography sx={{ textAlign: 'right', fontSize: '0.8rem' }}>
          皆さんこんにちは！いつもお世話になっております。ご利用いただき誠にありがとう御座います。
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: 'rgb(59,59,59)', marginBottom: 1 }}>
        <Typography variant="subtitle2">
          Dark mode is enabled if your OS/mobile/browser is set to dark mode
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: 'rgb(59,59,59)', padding: 0.5 }}>
        <Grid container sx={{ marginBottom: 1 }}>
          <Grid item xs={3}>
            <Button sx={NavButtonStyle}>
              <NavLink to='/dev' style={NavLinkStyle}>Dev Watch</NavLink>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button sx={NavButtonStyle}>
              <NavLink to='/bank' style={NavLinkStyle}>Bank Watch</NavLink>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button sx={NavButtonStyle}>
              <NavLink to='/hero' style={NavLinkStyle}>Hero Watch</NavLink>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button sx={NavButtonStyle}>
              <NavLink to='/personal' style={NavLinkStyle}>Personal Watch</NavLink>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button sx={NavButtonStyle}>
              <NavLink to='/quests' style={NavLinkStyle}>Quest Watch</NavLink>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button sx={NavButtonStyle}>
              <NavLink to='/epochs' style={NavLinkStyle}>Epoch Watch</NavLink>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button sx={NavButtonStyle}>
              <NavLink to='/feedback' style={NavLinkStyle}>Feedback</NavLink>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button sx={NavButtonStyle}>
              <NavLink to='/about' style={NavLinkStyle}>About</NavLink>
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: 'rgb(59,59,59)', marginBottom: 1, display: 'flex' }}>
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            size="small"
            sx={{ backgroundColor: '#222', ml: 2, mr: 1, width: 1 }}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "grey" }}}
            color="primary"
          />
          <ButtonGroup sx={{ mr: 2 }}>
            <Button variant="contained">Set</Button>
            <Button variant="contained" disabled={btnDisabled} onClick={connect}>Connect</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header

//export default {
//  name: "Header",
//  data() {
//    return {
//      copied: false,
//      inputUserAddress: "",

//    }
//  },
//  methods: {
//    ...mapActions(["setUserAddress"]),
//    copyTipJarToClipBoard() {
//      navigator.clipboard.writeText("0x0e9fbabfac3a56d076b62d48964bd7bf057876d7")
//      this.$gtag.event("CopyTipJarHeader")
//      this.copied = true
//      setTimeout(() => {
//        this.copied = false
//      }, 5000)
//    },

//  computed: {
//    ...mapGetters(["storeUserAddress"])
//  },
//  mounted() {
//    this.inputUserAddress = this.storeUserAddress
//    this.checkConnected()
//  }
//}
//
//