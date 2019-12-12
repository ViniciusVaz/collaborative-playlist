// Request Deezer
const api_key = `ZAIVAHCEISOHWAICUQUEXAEPICENGUAFAEZAIPHAELEEVAHPHUCUFONGUAPASUAY`
const tokenDeezer = 'fr39f63d2527c7e01be27a82a70f15cdcab080a8'

const baseUrl = `https://api.deezer.com/1.0/gateway.php?&api_key=${api_key}&output=3&input=3&sid=${tokenDeezer}`

export const SendSmsToken = `${baseUrl}&method=mobile_sendPhoneActivationCode` //sid not required
export const ConfirmSmsToken = `${baseUrl}&method=mobile_checkPhoneActivationCode` //sid not required
export const CheckToken = `${baseUrl}&method=api_checkToken`

export const GetPlaylistList = `${baseUrl}&method=playlist.getList`
export const GetPlayListInfo = `${baseUrl}&method=playlist.getSongs`

export const SearchMusic = `${baseUrl}&method=mobile_suggest`
export const AddMusic = `${baseUrl}&method=playlist.addSongs`
export const DeleteMusic = `${baseUrl}&method=playlist.deleteSongs`
