export default function Content({ Banner, SuggestedItems, Descriptions }) {
    return (
        <main>
            <img src={Banner[0].banner_img} class="img_main_pumpkin"/>

            <div class="body_box container">
                <h2 class="body_box_vegetable">Vegetable</h2>
                <h2 class="body_box_contact">Contact</h2>
            </div>

            <div class="body_box container">
                <div class="body_box_col">
                    {SuggestedItems.map(item => (<img src={item.img} className="img_carrot"/>))}
                </div>

                <div class="body_box_col_2">
                    <p>{Descriptions[0].description}</p>
                    <hr/>
                    <p>{Descriptions[0].email}<br/>{Descriptions[0].phone}</p>
                </div>

            </div>

        </main>
    );
}