import React from 'react'

const Footer = () => {
    return (
        <div className=''>


            {/* Retour */}
            <div className='bg-[#37475A] py-2 flex justify-center items-center text-white text-sm'>
                <p>Retour en haut</p>
            </div>

            {/* Block 1 */}

            <div className='bg-[#232F3E] text-white   pt-8 pb-10 border-b border-[#2F3B49]  px-2' >
                <div className='flex  flex-grow max-w-screen-lg m-auto justify-between'>
                    {/* COL1 */}
                    <div>
                        <h2 className=' font-bold pb-2'>Pour mieux nous connaitre</h2>
                        <p className='text-sm hover:underline cursor-pointer '>A propos d'Amazon</p>
                        <p className='text-sm hover:underline cursor-pointer'>Carrières</p>
                        <p className='text-sm hover:underline cursor-pointer'>Durabilité</p>
                        <p className='text-sm hover:underline cursor-pointer'>Amazon Science</p>
                    </div>
                    {/*COL2 */}
                    <div className='w-38 space-y-2'>
                        <h2 className=' font-bold pb-2'>Gagnez de l'argent</h2>
                        <p className='text-sm hover:underline cursor-pointer'>Vendez sur Amazon</p>
                        <p className='text-sm hover:underline cursor-pointer'>Vendez sur Amazon Business</p>
                        <p className='text-sm hover:underline cursor-pointer'>Vendez sur Amazon HandMade</p>
                        <p className='text-sm hover:underline cursor-pointer'>Vendez sur Amazon LauchPad</p>
                        <p className='text-sm hover:underline cursor-pointer'>Devenez Partnaire</p>
                        <p className='text-sm hover:underline cursor-pointer'>Expedié par Amazon</p>
                        <p className='text-sm hover:underline cursor-pointer'>Faites la promotion de vos produits</p>
                        <p className='text-sm hover:underline cursor-pointer'>Auto-publiez votre livre</p>
                        <p className='text-sm hover:underline cursor-pointer'>Voir plus: Gagner <br /> de l'argent avec nous</p>

                    </div>
                    {/*COL3 */}
                    <div className='space-y-2'>
                        <h2 className=' font-bold pb-2'>Moyens de paiement Amazon</h2>
                        <p className='text-sm hover:underline cursor-pointer'>Carte Amazon Business Amex</p>
                        <p className='text-sm hover:underline cursor-pointer'>Cartes de paiement</p>
                        <p className='text-sm hover:underline cursor-pointer'>Paiement en plusieurs fois</p>
                        <p className='text-sm hover:underline cursor-pointer'>Amazon Currency Converter</p>
                        <p className='text-sm hover:underline cursor-pointer'>Cartes cadeaux</p>
                        <p className='text-sm hover:underline cursor-pointer'>Recharge en ligne</p>
                        <p className='text-sm hover:underline cursor-pointer'>Recharge en point de vente</p>

                    </div>
                    {/*COL4 */}
                    <div className='w-28 space-y-2'>
                        <h2 className=' font-bold pb-2 whitespace-nowrap'>Besoin d'aide ?</h2>
                        <p className='text-sm hover:underline cursor-pointer'>Amazon et COVID-19</p>
                        <p className='text-sm hover:underline cursor-pointer'>Voir ou suivre vos commandes</p>
                        <p className='text-sm hover:underline cursor-pointer'>Tarifs et options de livraison</p>
                        <p className='text-sm hover:underline cursor-pointer'>Amazon Prime</p>
                        <p className='text-sm hover:underline cursor-pointer'>Retours et remplacements</p>
                        <p className='text-sm hover:underline cursor-pointer'>Recyclage (y compris les équipements électriques et électroniques)</p>
                        <p className='text-sm hover:underline cursor-pointer'>Infos sur notre Marketplace</p>
                        <p className='text-sm hover:underline cursor-pointer'>Application Amazon Mobile</p>
                        <p className='text-sm hover:underline cursor-pointer'>Amazon Assistant</p>
                        <p className='text-sm hover:underline cursor-pointer'>Service Client</p>
                        <p className='text-sm hover:underline cursor-pointer'>Accessibilité</p>
                    </div>
                </div>



            </div>

            {/* Block 2 */}
            <div className='bg-[#232F3E] flex justify-center flex-col items-center pt-8  px-2'>
                <img src='https://images-na.ssl-images-amazon.com/images/G/01/magicarp/image/amazon-logo-white.svg' width={120} height={50} />
                <div className='flex space-x-2 text-white text-sm pt-8 pb-8 max-w-2xl justify-center flex-wrap whitespace-nowrap'>
                    <p className='hover:underline cursor-pointer'>Australie</p>
                    <p className='hover:underline cursor-pointer'>Allemagne</p>
                    <p className='hover:underline cursor-pointer'>Brésil</p>
                    <p className='hover:underline cursor-pointer'>Canada</p>
                    <p className='hover:underline cursor-pointer'>Chine</p>
                    <p className='hover:underline cursor-pointer'>Espagne</p>
                    <p className='hover:underline cursor-pointer'>Etats-Unis</p>
                    <p className='hover:underline cursor-pointer'>Inde</p>
                    <p className='hover:underline cursor-pointer'>Italie</p>
                    <p className='hover:underline cursor-pointer'>Japon</p>
                    <p className='hover:underline cursor-pointer'>Mexique</p>
                    <p className='hover:underline cursor-pointer'>Pays-Bas</p>
                    <p className='hover:underline cursor-pointer'>Pologne</p>
                    <p className='hover:underline cursor-pointer'>Royaume-Uni</p>
                    <p className='hover:underline cursor-pointer'>Emirats Arabe</p>
                    <p className='hover:underline cursor-pointer'>Singapour</p>
                    <p className='hover:underline cursor-pointer'>Turquie</p>
                </div>
            </div>



        </div>
    )
}

export default Footer