import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from '../users/usersSlice'

export const PostAuthor = () => {
  const author = useSelector(selectUserById)

  return <span>by {author ? author.name : 'Unknown author'}</span>
}