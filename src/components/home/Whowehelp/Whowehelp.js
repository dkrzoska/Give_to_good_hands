import React, { useState } from 'react';
import styled from 'styled-components';
import Divwithdecoration from '../Divwithdecoration/Divwithdecoration';
import Button from '../Button/Button';
import Singlewhowehelp from '../Singlewhowehelp/Singlewhowehelp';
import { colors } from '../../settings/settings';

const Styledwhowehelp = styled.div`
    {
        width: 1344px;
        margin: 0 auto;
        .buttons {
            display: flex;
            justify-content: space-between;
            width: 750px;
            margin: 0 auto;
        }
        .button__div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            text-align: center;
        }
        .main {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 69px;
            &__description {
                width: 640px;
                font-size: 22px;
                line-height: 30px;
                text-align: center;
                margin-bottom: 66px;
            }
        }
        .three-buttons {
            display: flex;
            justify-content: center;
            margin-top: 66px;
        }
    }
`

const data = {
    description: [
        'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    ],
    organizations: [
        {
            title: [
                'Fundacja "Dbam o Zdrowie"',
                'Fundacja "Dla dzieci"',
                'Fundacja "Bez domu"',
                'Fundacja "Dbam o Zdrowie 2"',
                'Fundacja "Dla dzieci 2"',
                'Fundacja "Bez domu 2"',
                'Fundacja "Dbam o Zdrowie 3"',
                'Fundacja "Dla dzieci 3"',
                'Fundacja "Bez domu 3"',
            ],
            mission: [
                'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                '2 Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                '2 Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                '2 Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                '3 Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                '3 Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                '3 Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
            ],
            items: [
                'ubrania, jedzenie, sprzęt AGD, meble, zabawki',
                'ubrania, meble, zabawki',
                'ubrania, jedzenie, ciepłe koce',
                '2 ubrania, jedzenie, sprzęt AGD, meble, zabawki',
                '2 ubrania, meble, zabawki',
                '2 ubrania, jedzenie, ciepłe koce',
                '3 ubrania, jedzenie, sprzęt AGD, meble, zabawki',
                '3 ubrania, meble, zabawki',
                '3 ubrania, jedzenie, ciepłe koce',
            ]
        },
        {
            title: [
                'Organizacja "Lorem Ipsum 1"',
                'Organizacja "Lorem Ipsum 2"',
                'Organizacja "Lorem Ipsum 3"',
                'Organizacja "Lorem Ipsum 4"',
                'Organizacja "Lorem Ipsum 5"',
                'Organizacja "Lorem Ipsum 6"'
            ],
            mission: [
                'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                'Scelerisque in dictum non consectetur a erat nam.',
                '2 Quis varius quam quisque id diam vel quam elementum pulvinar.',
                '2 Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                '2 Scelerisque in dictum non consectetur a erat nam.'
            ],
            items: [
                'Egestas, sed, tempus',
                'Ut, aliquam, purus, sit, amet',
                'Mi, quis, hendrerit, dolor',
                '2 Egestas, sed, tempus',
                '2 Ut, aliquam, purus, sit, amet',
                '2 Mi, quis, hendrerit, dolor'
            ]
        },
        {
            title: [
                'Zbiórka "Lorem Ipsum 1"',
                'Zbiórka "Lorem Ipsum 2"',
                'Zbiórka "Lorem Ipsum 3"'
            ],
            mission: [
                'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                'Scelerisque in dictum non consectetur a erat nam.'
            ],
            items: [
                'Egestas, sed, tempus',
                'Ut, aliquam, purus, sit, amet',
                'Mi, quis, hendrerit, dolor'
            ]
        }
    ]
}

function Whowehelp() {
    const [organization, setOrganization] = useState(0);
    const [page, setPage] = useState(1);

    const handlesetorganization = ev => {
        setOrganization(ev.target.dataset.value);
        setPage(1);
    }

    const handlesetpage = ev => {
        setPage(ev.target.dataset.value);
    }

    const numberofbuttons = Math.ceil(data.organizations[organization].title.length / 3);
    let buttonstorender = [];
    for (let i = 1; i <= numberofbuttons; i++) {
        buttonstorender.push(
            <Button
                key={i}
                height='50px'
                width='40px'
                fontsize='18px'
                border='solid 0.75px'
                bordercolor={i == page ? colors.color_gray : '#fff'}
                borderhover='solid 0.75px'
                bordercolorhover={colors.color_gray}
                margin='0'
                padding='0'
            >
                <p className='button__div' data-value={i} onClick={handlesetpage}>{i}</p>
            </Button>
        );
    }

    let listsinglewhowehelp = [];
    for (let i = (page-1)*3; i < (page-1)*3+3; i++) {
        listsinglewhowehelp.push(
            <Singlewhowehelp
                key={i}
                title={data.organizations[organization].title[i]}
                mission={data.organizations[organization].mission[i]}
                items={data.organizations[organization].items[i]}
            />
        );
    }


    return (
        <Styledwhowehelp>
            <Divwithdecoration fontsize='38px' lineheight='55px'>
                <p>Komu pomagamy?</p>
            </Divwithdecoration>
            <div className='buttons'>
                <Button
                    height='79px'
                    width='208px'
                    fontsize='24px'
                    border='solid 0.75px'
                    bordercolor='#fff'
                    borderhover='solid 0.75px'
                    bordercolorhover={colors.color_gray}
                    margin='0'
                    padding='0'
                >
                    <p
                        data-value={0}
                        onClick={handlesetorganization}
                        className='button__div'>
                        Fundacjom
                    </p>
                </Button>
                <Button
                    height='79px'
                    width='208px'
                    fontsize='24px'
                    border='solid 0.75px'
                    bordercolor='#fff'
                    borderhover='solid 0.75px'
                    bordercolorhover={colors.color_gray}
                    margin='0'
                    padding='0'
                >
                    <p
                        data-value={1}
                        onClick={handlesetorganization}
                        className='button__div'>
                        Organizacjom pozarządowym
                    </p>
                </Button>
                <Button
                    height='79px'
                    width='208px'
                    fontsize='24px'
                    border='solid 0.75px'
                    bordercolor='#fff'
                    borderhover='solid 0.75px'
                    bordercolorhover={colors.color_gray}
                    margin='0'
                    padding='0'
                >
                    <p
                        data-value={2}
                        onClick={handlesetorganization}
                        className='button__div'>
                        Lokalnym zbiórkom
                    </p>
                </Button>
            </div>
            <div className='main'>
                <p className='main__description'>{data.description[organization]}</p>
            </div>
                {listsinglewhowehelp}
            <div className='three-buttons'>
                {buttonstorender}
            </div>
        </Styledwhowehelp>
    )
}

export default Whowehelp
