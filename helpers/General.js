export const integerToRupiah = int =>  {
  return 'Rp' + int.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}