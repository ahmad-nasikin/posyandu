class Kalender {
  constructor(ttl) {
    this._tanggal = new Date(ttl);
    this.hari  = this._tanggal.getDate();
    this.bulan = this._tanggal.getMonth() + 1;
    this.tahun = this._tanggal.getFullYear();
    // this._tanggal = `${this.tahun}-${this.bulan}-${this.hari}`;
    this.umur = this.getUmur();
    this.umurBulan = this.getUmurBulan()
  }

  bulans() {
    let tanggal = this._tanggal
      let ageDifMs = Date.now() - tanggal.getTime();
      let ageDate = new Date(ageDifMs); // miliseconds from epoch
      let tahun = (ageDate.getUTCFullYear() - 1970);
      let bulan = ageDate.getUTCMonth()
    return [tahun, bulan]
  }

  getUmur() {return `${this.bulans()[0]} tahun, ${this.bulans()[1]} bulan`;}

  getUmurBulan() {return (this.bulans()[0] * 12) + this.bulans()[1]}

}

let age = ttl => {
  return new Kalender(ttl);
}

// let kalender = new Kalender('1997-02-22')
// console.log(kalender);
// console.log(age('1997-02-22'));

module.exports = age