import { Grid } from "@material-ui/core";
import React from "react"
import { SvgIcon } from '../../buttons-indicators/svg-icon/svg-icon';
import { Card } from "../../cards/card/card";
import { CardProfile } from "../../cards/cardProfile/cardProfile";
import "./card-list-view.scss";

export const CardListView = () => {
    const imageUrl = 'https://picsum.photos/300/200';
    const title = 'Tiziano Vitaliani';
    const body = "I'm a full time developer, specialized in quality assurance and end to end testing with Cypress and Cucumber";

    return (
        <div class="card-list-container">
            <Grid container spacing={10}>
                <Grid container item xs={3} spacing={3}>
                    <CardProfile></CardProfile>
                </Grid>
                <Grid container item xs={3} spacing={3}>
                    <CardProfile></CardProfile>
                </Grid>
                <Grid container item xs={3} spacing={3}>
                    <CardProfile></CardProfile>
                </Grid>
                <Grid container item xs={3} spacing={3}>
                    <CardProfile></CardProfile>
                </Grid>

                <Grid container item xs={3} spacing={3}>
                    <Card></Card>
                </Grid>
                <Grid container item xs={3} spacing={3}>
                    <Card></Card>
                </Grid>
                <Grid container item xs={3} spacing={3}>
                    <Card></Card>
                </Grid>
                <Grid container item xs={3} spacing={3}>
                    <Card></Card>
                </Grid>
            </Grid>
        </div>
    )
}