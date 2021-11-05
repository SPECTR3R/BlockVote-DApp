import { getVotes, userDidParticipate, incrementVotes, recordUser } from '..'

describe('votescontract', () => {
  it('should return 0 if no one has vote for a given candidate', () => {
    expect(getVotes('planillaVerde')).toBe(0, 'counter should be 0 if no one as voted yet.')
  })

  it('should increment a votes count by one for a given candidate', () => {
    const currenVotes = getVotes('planillaVerde')
    incrementVotes('planillaVerde')
    expect(getVotes('planillaVerde')).toBe(currenVotes + 1)
  })

  it('userDidParticipate should return false if he has not voted yed', () => {
    expect(userDidParticipate('juan')).toBe(false)
  })

  it('userDidParticipate should return true if he is recorded as voter', () => {
    recordUser('juan')
    expect(userDidParticipate('juan')).toBe(true)
  })
})
