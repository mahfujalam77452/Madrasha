import React, { useContext } from 'react'
import NoticeCard from '../Components/NoticeCard/NoticeCard'
import './CSS/Notice.css'
import { DataContext } from '../Context/DataContext'
const Notice = () => {
 
    const {AllNotice} = useContext(DataContext);
     
  return (
    <div className='notice'>
        {
           AllNotice.map(
            (item,i) => {
                return <NoticeCard notice_title={item.notice_title} date = {item.notice_date} noticeLink = { item.notice_link} key={i}/>
            }
           )
        }
      
    </div>
  )
}

export default Notice
