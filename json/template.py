[
  {
    ip: '{{integer(1, 256)}}.{{integer(1, 256)}}.{{integer(1, 256)}}.{{integer(1, 256)}}',
    user: '{{firstName()}}.{{surname()}}',
    access_times: [
      '{{repeat(1, 10)}}',
      '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
    ],
    access_velocity: '{{integer(0, 10)}}',
    countryCode: '{{country(true)}}',
    country: '{{country()}}',
    city: '{{city()}}',
    isp: '{{company()}}',
    guid: '{{guid()}}',
    score: '{{integer(0, 100)}}',
    signals: [
      '{{repeat(1, 5)}}',
      '{{random(["unauthorised_access"], ["access_count"])}}'
    ],
    lat: '{{floating(-90.000001, 90)}}',
    lon: '{{floating(-180.000001, 180)}}'
  }
]
