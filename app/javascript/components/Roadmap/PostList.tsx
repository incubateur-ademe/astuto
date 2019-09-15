import * as React from 'react';

import PostListItem from './PostListItem';
import { MutedText } from '../shared/CustomTexts';

import IPostJSON from '../../interfaces/json/IPost';
import IBoard from '../../interfaces/IBoard';

interface Props {
  posts: Array<IPostJSON>;
  boards: Array<IBoard>;
}

const PostList = ({ posts, boards }: Props) => (
  <div className="postList">
    {
      posts.length > 0 ?
        posts.map((post, i) => (
          <PostListItem
            id={post.id}
            title={post.title}
            boardName={boards.find(board => board.id === post.board_id).name}

            key={i}
          />
        ))
      :
        <MutedText>There are no posts that have this status.</MutedText>
    }
  </div>
);

export default PostList;