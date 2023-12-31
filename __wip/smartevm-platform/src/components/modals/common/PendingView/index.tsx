import React from 'react'
import styled from 'styled-components'

import { Connector } from 'wagmi'

import { Button } from '../../../buttons/Button'
import { InlineLoading } from '../../../common/InlineLoading'
import { AlertIcon } from '../../../icons/AlertIcon'
import { IconWrapper } from '../pureStyledComponents/IconWrapper'
import { Text } from '../pureStyledComponents/Text'

const Wrapper = styled.div``

const LoadingWrapper = styled(InlineLoading)`
  height: 180px;
`

const ActionButton = styled(Button)`
  margin-top: 80px;
  width: 100%;
`

interface Props {
  connector?: Connector
  error?: boolean
  setPendingError: (error: boolean) => void
  tryActivation: (connector: Connector) => void
}

const PendingView: React.FC<Props> = (props) => {
  const { connector, error = false, setPendingError, tryActivation, ...restProps } = props

  return (
    <Wrapper {...restProps}>
      {error && (
        <>
          <IconWrapper>
            <AlertIcon />
          </IconWrapper>
          <Text fontSize="18px" textAlign="center">
            Error connecting.
          </Text>
          <ActionButton
            onClick={() => {
              setPendingError(false)
              connector && tryActivation(connector)
            }}
          >
            Try Again
          </ActionButton>
        </>
      )}
      {!error && <LoadingWrapper message={'Connecting...'} />}
    </Wrapper>
  )
}

export default PendingView
