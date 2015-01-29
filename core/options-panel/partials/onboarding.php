<?php // Fetch current user information
$user = wp_get_current_user(); ?>

<?php // Instantiate Inputs
$form_elements = new Layers_Form_Elements(); ?>

<?php // Instantiate the widget migrator
$layers_migrator = new Layers_Widget_Migrator(); ?>

<section class="layers-area-wrapper">

    <div class="layers-onboard-wrapper">

        <div class="layers-onboard-controllers">

            <a class="layers-button btn-cancel layers-pull-left" href="">Cancel</a>
            <div class="onboard-nav-dots">
                <a class="layers-dot" href=""></a>
                <a class="layers-dot dot-active" href=""></a>
                <a class="layers-dot" href=""></a>
                <a class="layers-dot" href=""></a>
            </div>
            <a class="layers-button btn-link layers-pull-right" href="">Skip</a>

        </div>

        <div class="layers-onboard-slider">

            <!-- Give your site a Name -->
            <div class="layers-onboard-slide">
                <div class="layers-column layers-span-12 postbox">
                    <div class="layers-content-large">
                        <!-- Your content goes here -->
                        <div class="layers-section-title layers-no-push-bottom">
                            <h3 class="layers-heading">
                                Welcome to Layers!
                            </h3>
                            <p class="layers-excerpt">
                            
                                Layers is a revolutionary WordPress theme that enables you to build any website you want.
                                This is a step by step setup process to help you get going with
                                minimum fuss. Enjoy the ride!

                            </p>
                        </div>
                    </div>
                    <div class="layers-button-well">
                        <div class="onboard-nav-dots">
                            <a class="layers-dot dot-active" href=""></a>
                            <a class="layers-dot" href=""></a>
                            <a class="layers-dot" href=""></a>
                            <a class="layers-dot" href=""></a>
                            <a class="layers-dot" href=""></a>
                        </div>
                        <a class="layers-button btn-primary layers-pull-right" href="">Let's get Started &rarr;</a>
                    </div>
                </div>
            </div>

            <!-- Give your site a Name -->
            <div class="layers-onboard-slide">
                <div class="layers-column layers-span-8 postbox">
                    <div class="layers-content-large">
                        <!-- Your content goes here -->
                        <div class="layers-section-title">
                            <h3 class="layers-heading">
                                What is the name of your website?
                            </h3>
                            <p class="layers-excerpt">
                                Probably the easiest part of creating any website is giving it a name. No code skills required here!
                            </p>
                        </div>
                        <p class="layers-form-item">
                            <label>Site Name</label>
                            <input type="text" class="layers-text" placeholder="Betties Bakery" />
                        </p>
                    </div>
                    <div class="layers-button-well">
                        <div class="onboard-nav-dots">
                            <a class="layers-dot" href=""></a>
                            <a class="layers-dot dot-active" href=""></a>
                            <a class="layers-dot" href=""></a>
                            <a class="layers-dot" href=""></a>
                            <a class="layers-dot" href=""></a>
                        </div>
                        <a class="layers-button btn-primary layers-pull-right" href="">Next Step &rarr;</a>
                    </div>
                </div>
                <div class="layers-column layers-span-4 no-gutter">
                    <div class="layers-content">
                        <!-- Your helpful tips go here -->
                        <ul class="layers-help-list">
                            <li>
                                For tips on how best to name your website, we suggest visiting <a href="http://help.layerswp.com/" rel="nofollow">this post.</a>
                            </li>
                            <li class="pro-tip">For the Pros: Layers will automatically assign this site name to Settings &rarr; General.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Give your site a Tagline -->
            <div class="layers-onboard-slide">
                <div class="layers-column layers-span-8 postbox">
                    <div class="layers-content-large">
                        <!-- Your content goes here -->
                        <div class="layers-section-title">
                            <h3 class="layers-heading">
                                How would you best describe your site?
                            </h3>
                            <p class="layers-excerpt">
                                A tagline describes who and what you are in just a few simple words.
                                For example Layers is a 'WordPress Site Builder' - simple, easy, quick to read. Now you try:
                            </p>
                        </div>
                        <p class="layers-form-item">
                            <label>Site Tagline</label>
                            <input type="text" class="layers-text" placeholder="Makers of delicious cup cakes" />
                        </p>
                    </div>
                    <div class="layers-button-well">
                        <div class="onboard-nav-dots">
                            <a class="layers-dot" href=""></a>
                            <a class="layers-dot" href=""></a>
                            <a class="layers-dot dot-active" href=""></a>
                            <a class="layers-dot" href=""></a>
                            <a class="layers-dot" href=""></a>
                        </div>
                        <a class="layers-button btn-primary layers-pull-right" href="">Next Step &rarr;</a>
                    </div>
                </div>
                <div class="layers-column layers-span-4 no-gutter">
                    <div class="layers-content">
                        <!-- Your helpful tips go here -->
                        <ul class="layers-help-list">
                            <li>Keep it simple</li>
                            <li>Avoid buzz words</li>
                            <li>Make sure it describes what you offer</li>
                            <li class="pro-tip">For the Pros: Layers will automatically assign the tagline to Settings &rarr; General.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Upload a Logo -->
            <div class="layers-onboard-slide">
                <div class="layers-column layers-span-8 postbox">
                    <div class="layers-content-large">
                        <!-- Your content goes here -->
                        <div class="layers-section-title">
                            <h3 class="layers-heading">
                                Great! Now let's add a logo
                            </h3>
                            <p class="layers-excerpt">
                                 A website logo is a useful contributor to the general look and feel of your site.
                                 Luckily with Layers, you can add one easily.
                            </p>
                        </div>
                        <div class="layers-logo-wrapper">
                            <div class="layers-logo-upload">
                                <span style="display: none;">No logo set</span>
                                <img src="http://obox.beta/wp-content/uploads/2015/01/logo-copy.png" class="site-logo-thumbnail">
                            </div>
                            <div class="layers-button-well">
                                <button type="button" class="layers-button btn-cancel layers-span-6">Remove logo</button>
                                <button type="button" class="layers-button layers-span-6 no-gutter">Change logo</button>
                                <button style="display: none;" type="button" class="button new">Add logo</button>
                            </div>
                        </div>
                    </div>
                    <div class="layers-button-well">
                        <div class="onboard-nav-dots">
                            <a class="layers-dot" href=""></a>
                            <a class="layers-dot" href=""></a>
                            <a class="layers-dot" href=""></a>
                            <a class="layers-dot dot-active" href=""></a>
                            <a class="layers-dot" href=""></a>
                        </div>
                        <a class="layers-button btn-primary layers-pull-right" href="">Next Step &rarr;</a>
                    </div>
                </div>
                <div class="layers-column layers-span-4 no-gutter">
                    <div class="layers-content">
                        <!-- Your helpful tips go here -->
                        <ul class="layers-help-list">
                            <li>Any size is fine, Layers will resize it automatically to fit your site</li>
                            <li>PNGs with a transparent background work best but GIFs or JPGs are fine too</li>
                            <li>Try keep your logo file size below 500kb</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>


    </div>

</section>
