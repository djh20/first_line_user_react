import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    fontSize: '2rem'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PostCard(props){
    const marginBottom = props.marginBottom
    const cardWidth = props.cardWidth
    const title = props.title
    const content = props.content
    
    const classes = useStyles();
    
    return(
        <Card style={{marginBottom: marginBottom, width: cardWidth}} align="left">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" component="p" noWrap>
           {content}
          </Typography> 
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
}