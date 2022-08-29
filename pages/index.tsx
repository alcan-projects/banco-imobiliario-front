import { NextPage } from 'next'

// components
import BoxElement from '../src/components/Box'
import BoxBottomLeft from '../src/components/BoxBottomLeft'
import BoxBottomRight from '../src/components/BoxBottomRight'
import BoxTopLeft from '../src/components/BoxTopLeft'
import BoxTopRight from '../src/components/BoxTopRight'

// styleds
import { BaseStyled } from '../src/styles/home'

// class
import { Board } from '../src/module/board'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [players, setPlayers] = useState([
    ['Leodeyison'],
    ['zeck', 'Pedrin']
  ])

  useEffect(() => {
    new Board().test()
  }, [])

  return (
    <BaseStyled>
      <div className='primary'>
        <section>
          <BoxTopLeft />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão e talso'
            home={[0, 0, 0]}
            players={players[0]}
          />
          <BoxElement
            background='work'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
            players={players[1]}
          />
          <BoxElement
            background='agricultura'
            icon={"ok"}
            price="$12.120"
            title='Orta seu joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
            home={[0, 0, 0]}
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
            home={[0, 0, 0]}
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
            home={[0, 0, 0]}
          />
          <BoxTopRight />
        </section>
        <div className='center'>
          <section>
            <BoxElement
              background='home'
              icon={"ok"}
              price="$12.120"
              title='Casa são joão'
              angle='left'
            />
            <BoxElement
              background='home'
              icon={"ok"}
              price="$12.120"
              title='Casa são joão'
              angle='left'
            />
            <BoxElement
              background='home'
              icon={"ok"}
              price="$12.120"
              title='Casa são joão'
              home={[0, 0, 0]}
              angle='left'
            />
            <BoxElement
              background='home'
              icon={"ok"}
              price="$12.120"
              title='Casa são joão'
              angle='left'
            />
            <BoxElement
              background='home'
              icon={"ok"}
              price="$12.120"
              title='Casa são joão'
              angle='left'
            />
          </section>
          <div className='primary'>
            Banco imobiliário
          </div>
          <section>
            <BoxElement
              background='home'
              icon={"ok"}
              price="$12.120"
              title='Casa são joão'
              angle='rigth'
            />
            <BoxElement
              background='home'
              icon={"ok"}
              price="$12.120"
              title='Casa são joão'
              angle='rigth'
            />
            <BoxElement
              background='home'
              icon={"ok"}
              price="$12.120"
              title='Casa são joão'
              home={[0, 0, 0]}
              angle='rigth'
            />
            <BoxElement
              background='home'
              icon={"ok"}
              price="$12.120"
              title='Casa são joão'
              angle='rigth'
            />
            <BoxElement
              background='home'
              icon={"ok"}
              price="$12.120"
              title='Casa são joão'
              angle='rigth'
            />
          </section>
        </div>
        <section>
          <BoxBottomLeft/>
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='work'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='agricultura'
            icon={"ok"}
            price="$12.120"
            title='Orta seu joão'
            home={[0, 0, 0]}
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
            home={[0, 0, 0]}
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxElement
            background='home'
            icon={"ok"}
            price="$12.120"
            title='Casa são joão'
          />
          <BoxBottomRight />
        </section>
      </div>
      <div>
        controllers
        <br />
        <br />
        <ul>
          <li>
            Pedrin
          </li>
          <li>
            carlos
          </li>
          <li>
            leo
          </li>
          <li>
            fabio
          </li>
        </ul>
      </div>
      
      
    </BaseStyled>
  )
}
export default Home