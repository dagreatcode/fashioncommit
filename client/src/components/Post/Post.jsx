import React from 'react'
import PropTypes from 'prop-types'

export default function Post({id, userId, title, body}) {
  return (
    <>
    <h1>{title}</h1>
    <p>
      <strong>UserId</strong> {userId}
    </p>
    <p>
      <strong>Post Id</strong> {id}
    </p>
    <p>
      {body}
    </p>
  </>
  );
}

Post.propTypes = {
id: PropTypes.number.isRequired,
userId: PropTypes.number.isRequired,
title: PropTypes.string.isRequired,
body: PropTypes.string.isRequired,
}

//rfcp//