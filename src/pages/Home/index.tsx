import { Play } from 'phosphor-react'

import * as S from './styles'

export function Home() {
    return (
        <S.HomeContainer>
            <form>
                <S.FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <S.TaskInput id="task" list="datalist" placeholder="Dê um nome para o seu projeto" />

                    <datalist id="datalist">
                        <option value="Projeto1" />
                        <option value="Projeto2" />
                        <option value="Projeto3" />
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <S.MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />

                    <span>minutos.</span>
                </S.FormContainer>

                <S.CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <S.Separator>:</S.Separator>
                    <span>0</span>
                    <span>0</span>
                </S.CountdownContainer>

                <S.StartCountdownButton disabled type="submit">
                    <Play size={24} />
                    Começar
                </S.StartCountdownButton>
            </form>
        </S.HomeContainer>
    )
}