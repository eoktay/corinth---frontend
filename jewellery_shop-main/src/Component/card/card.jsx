// import { FaHourglassEnd, FaWindowClose, FaEdit, FaHourglassHalf } from "react-icons/fa";
import React from 'react'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import './card.css'
function card({ product }) {
  return (

    <div>
      <div class="container">
        <div class="post-card">
          <div class="post-card__nav">
            <ul>
              <li>
                <a href="#" class="active"><HourglassBottomIcon /></a>
              </li>
              <li>
                {product.finished ? <a href="#"><CloseIcon /></a> : <a href="#"><HourglassBottomIcon /></a>}
              </li>
              <li>
                <a href="#"><EditIcon /></a>
              </li>
            </ul>
          </div>
          <div class="post-card__content">
            <div class="post-card__info">
              <h1>{product.title} Title</h1>
              <h5>Type:&nbsp;<span>{product.type}</span></h5>
              <p className="note">{product.notes}</p>
              <h5>Customer:&nbsp;<span>{product.customer}</span></h5>
              <h5>Customer Id:&nbsp;<span>{product.custom_id}</span></h5>
              <h5>properties:&nbsp;<span>{product.properties}</span></h5>
            </div>
          </div>
          <div class="post-card__img" id="post-card__img">
            <div class="post-card__social">
              <p className="date">Created Date:&nbsp;<span>{product.createdAt}</span></p>
              {product.updatedDate ? <p className="date">Updated Date:&nbsp;<span>{product.updatedAt}</span></p> : ""}
                
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card