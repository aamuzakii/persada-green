export const integerToRupiah = int =>  {
  if (!int) return 'Rp. 0'
  return 'Rp' + int.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}