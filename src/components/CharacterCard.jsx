import { useState } from 'react'

// components
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const CharacterCard = ({ character }) => {
    const [showStats, setShowStats] = useState(false)
    
    return (
        <Card className="hover:shadow-lg my-8 bg-gray-100 hover:border-black transition-colors duration-500">
            <div className='flex flex-col md:flex-row'>
                <div className="w-full md:w-1/2 lg:w-1/4 h-auto overflow-hidden rounded-l-lg">
                    <img
                        src={`${character.images.small}`}
                        className="w-full h-auto object-cover object-bottom" 
                        alt={`${character.name}'s picture`}
                    />
                </div>

                <div className="w-full md:w-2/3 flex flex-col flex justify-center md:pl-5 mt-4 md:mt-0"> 
                    <CardContent className="text-left p-0 pl-4">
                        <CardTitle className="text-lg font-semibold text-lg flex items-center justify-between flex-wrap">
                            <div>
                                {character.name}
                                {character.level && <span className='pl-2 text-xs'>LV.{character.level}</span>}
                                <span className='px-2 text-xs'>HP.{character.hp}</span>
                            </div>
                            
                            <Button variant="link" className='p-0 font-normal mr-4' onClick={() => setShowStats(!showStats)}>{showStats ? "Hide Prices" : "Show Prices"}
                            </Button>
                        </CardTitle>
                        {showStats ? 
                        (<CardDescription className='mt-3'>
                            <p className="text-sm font-normal mb-1"><span className="font-medium mr-1">Average Sell Price:</span> ${character.cardmarket.prices.averageSellPrice}</p>
                            <p className="text-sm font-normal mb-1"><span className="font-medium mr-1">Trend Price:</span> ${character.cardmarket.prices.trendPrice}</p>
                            <p className="text-sm font-normal mb-1"><span className="font-medium mr-1">Low Price:</span> ${character.cardmarket.prices.lowPrice}</p>

                        </CardDescription>
                        )
                        : 
                        (<CardDescription className='mt-3'>
                            {character.abilities && character.abilities.map((ability, index) => (
                                <div key={index} className='mb-3'>
                                    <h3 className='text-xs lg:text-sm'><span className="font-medium">Ability: </span>{ability.name}</h3>
                                    <p className='text-xs lg:text-sm'>{ability.text}</p>
                                </div>
                            ))}

                            {character.attacks && character.attacks.map((attack, index) => (
                                <div key={index} className='mb-3'>
                                    <h3 className='text-xs lg:text-sm'><span className="font-medium">Attack: </span>{attack.name} {attack.damage}</h3>
                                    <p className='text-xs lg:text-sm'><span className="font-medium">Cost: </span> {attack.cost.join(', ')}</p>
                                    {attack.text && <p className='text-xs lg:text-sm'><span className="font-medium">Effect: </span> {attack.text}</p>}
                                </div>
                            ))}
                        </CardDescription>
                        )}
                    </CardContent>
                </div>
            </div>   
        </Card>
    )
}

export default CharacterCard