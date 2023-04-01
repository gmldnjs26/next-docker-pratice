import { FC, ReactNode } from 'react';
import { PostDetail } from '~/types/global';
import { fetchPostList } from '~/api';
import PostList from '~/components/PostList';

type Props = {
  className?: string;
  children?: ReactNode;
  postList: PostDetail[];
};

const Home: FC<Props> = ({ postList }) => {
  return <PostList postList={postList} />;
};

export default Home;

export async function getServerSideProps(ctx) {
  const postList = await fetchPostList({ category_name: ctx.params.name });
  return {
    props: {
      postList: postList || [],
    },
  };
}