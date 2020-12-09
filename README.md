# Blocks/Removes Pinterest Ads

All Pinterest grid items have a `data-test-pin-id` attribute... for ads, they need to be able to track them so they use alphanumeric strings. This extension monitors the dom for elements that match that pattern and then removes them.
