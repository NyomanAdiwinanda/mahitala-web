import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CLIMBING from './CLIMBING.png';
import MOUNTAINEERING from './MOUNTAINEERING.png';
import DIVING from './DIVING.png';
import CAVING from './CAVING.png';
import RAFTING from './RAFTING.png';
import PMT from './PMT.png';
import { CardActionArea } from '@material-ui/core';
import './EnamIng.css';

const useStyles = makeStyles({
  root: {
    minWidth: 130,
    borderRadius: 15,
    marginLeft: 20,
    position: "relative",
    left: 20
  },
  media: {
    minHeight: 180,
    borderRadius: 15,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      <div className="enaming-component">
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={CLIMBING}
                title="Contemplative Reptile"
            />
            </CardActionArea>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={MOUNTAINEERING}
                title="Contemplative Reptile"
                />
            </CardActionArea>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={DIVING}
                title="Contemplative Reptile"
                />
            </CardActionArea>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={CAVING}
                title="Contemplative Reptile"
                />
            </CardActionArea>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={RAFTING}
                title="Contemplative Reptile"
                />
            </CardActionArea>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={PMT}
                title="Contemplative Reptile"
                />
            </CardActionArea>
        </Card>
    </div>
  );
}