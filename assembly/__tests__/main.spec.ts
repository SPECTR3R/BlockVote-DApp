import { getVotes, affilliateDidParticipate, incrementVotes, recordUser } from '..'

describe('votescontract', () => {
  it('should return 0 if no one has vote for a given candidate', () => {
    expect(getVotes('planillaVerde')).toBe(0, 'counter should be 0 if no one as voted yet.')
  })

  it('should increment a votes count by one for a given candidate', () => {
    const currenVotes = getVotes('planillaVerde')
    incrementVotes('planillaVerde')
    expect(getVotes('planillaVerde')).toBe(
      currenVotes + 1,
      'counter should increment by one after a incrementVotes gets called on a given voter.'
    )
  })

  it('affilliateDidParticipate should return false if them have not voted yed', () => {
    expect(affilliateDidParticipate('juan')).toBe(false)
  })

  it('affilliateDidParticipate should return true if them have been recorded as voter', () => {
    recordUser('juan')
    expect(affilliateDidParticipate('juan')).toBe(true)
  })
})
