export default (player, idPlaylist) => {
  return player === 'deezer' ?
    <iframe scrolling="no" frameborder="0" allowTransparency="true" src={`https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=500&color=ff0000&layout=dark&size=medium&type=playlist&id=${idPlaylist}`} width="100%" height="100%"></iframe>
    :
    <iframe src={`https://open.spotify.com/embed/playlist/${idPlaylist}`} width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
}