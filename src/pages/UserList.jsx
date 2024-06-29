import useFetchGet from "../hooks/useFetchGet";

export default function UserList() {
  const {
    data: users,
    loading: loadingUsers,
    error: errorUsers,
  } = useFetchGet("users");
  const {
    data: albums,
    loading: loadingAlbums,
    error: errorAlbums,
  } = useFetchGet("albums");

  return (
    <>
      <h2>Fectch Users</h2>
      {loadingUsers ? (
        <p>Loading users...</p>
      ) : (
        <ol>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ol>
      )}
      <h2>Albums</h2>
      <button className="btn btn-primary">Get albums</button>
      <ol>
        {albums.map((album) => {
          return <li key={album.id}>{album.title}</li>;
        })}
      </ol>
    </>
  );
}
