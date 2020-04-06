const { makeFilter } = require ('../filter');

describe('makeFilter', () => {

  it('should have filter per days', () => {
    // arrange
    const date = new Date(2020,0,1);
    // act
    const rta = makeFilter(date);
    // assert
    expect(rta[0].label).toBe('Últimos 7 días');
    expect(rta[0].startAt).toBe('2019/12/25');
    expect(rta[0].endAt).toBe('2020/01/01');

    expect(rta[1].label).toBe('Últimos 28 días');
    expect(rta[1].startAt).toBe('2019/12/04');
    expect(rta[1].endAt).toBe('2020/01/01');

    expect(rta[2].label).toBe('Últimos 90 días');
    expect(rta[2].startAt).toBe('2019/10/03');
    expect(rta[2].endAt).toBe('2020/01/01');

    expect(rta[3].label).toBe('Últimos 365 días');
    expect(rta[3].startAt).toBe('2019/01/01');
    expect(rta[3].endAt).toBe('2020/01/01');
  });

  it('should have filter per years', () => {
    // arrange
    const date = new Date(2020,0,1);
    // act
    const rta = makeFilter(date);
    // assert
    expect(rta[4].label).toBe('2019');
    expect(rta[4].startAt).toBe('2019/01/01');
    expect(rta[4].endAt).toBe('2019/12/31');

    expect(rta[5].label).toBe('2018');
    expect(rta[5].startAt).toBe('2018/01/01');
    expect(rta[5].endAt).toBe('2018/12/31');

    expect(rta[6].label).toBe('2017');
    expect(rta[6].startAt).toBe('2017/01/01');
    expect(rta[6].endAt).toBe('2017/12/31');
  });

  it('should have filter per months', () => {
    // arrange
    const date = new Date(2020,0,1);
    // act
    const rta = makeFilter(date);
    // assert
    expect(rta[7].label).toBe('diciembre');
    expect(rta[7].startAt).toBe('2019/12/01');
    expect(rta[7].endAt).toBe('2019/12/31');

    expect(rta[8].label).toBe('noviembre');
    expect(rta[8].startAt).toBe('2019/11/01');
    expect(rta[8].endAt).toBe('2019/11/30');

    expect(rta[9].label).toBe('octubre');
    expect(rta[9].startAt).toBe('2019/10/01');
    expect(rta[9].endAt).toBe('2019/10/31');
  });

});
