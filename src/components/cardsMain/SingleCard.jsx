import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pl from "../../assets/g1.png";


const SingleCard = ({item}) => {
    const {title,img, url, details } = item;
  return (
    <div className='w-full sm:p-[5px] md:p-[5px] lg:p-[7px] xl:p-[10px] 2xl:p-[14px] border-1 border-[#EDF0F3] rounded-[20px]'>
       <Card className={`sm:h-[420px] md:h-[420px] lg:h-[400px] xl:h-[400px] 2xl:h-[379px] w-full rounded-[20px] sm: md: lg:p-1 xl:p-2 2xl:p-2 mb-4 lg:mb-0`}>
      <CardMedia
        sx={{ height: 220 }}
        image={"/card/1.png"}
        title="green iguana"
        className='sm: md:p-1 lg: xl:p-2 2xl:p-2 rounded-[20px]'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className=' md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[20px]'>
          {title.length<24 ? title : ` ${title.slice(0,30)}... `  }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default SingleCard