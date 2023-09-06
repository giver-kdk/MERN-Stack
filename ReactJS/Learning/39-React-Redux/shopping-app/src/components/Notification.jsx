import React from 'react'
import {Alert} from "@mui/material"
import { useDispatch } from 'react-redux'
import { noticeActions } from '../store/noticeSlice';

export default function Notification({severity, message, visibility}) {
	let dispatch = useDispatch();
	function handleClose()
	{	
		dispatch(noticeActions.closeNotification());
	}	
  return (
	<div>
	{visibility && <Alert  onClose={handleClose} severity={severity}>{message}</Alert>}
	</div>
  )
}
